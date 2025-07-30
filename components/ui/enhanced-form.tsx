"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedButton } from "./animated-button"
import { LoadingSpinner } from "./loading-spinner"
import { Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormField {
  name: string
  label: string
  type: string
  required?: boolean
  placeholder?: string
  validation?: (value: string) => string | null
}

interface EnhancedFormProps {
  fields: FormField[]
  onSubmit: (data: Record<string, string>) => Promise<void>
  submitText?: string
  className?: string
}

export function EnhancedForm({ fields, onSubmit, submitText = "Submit", className }: EnhancedFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateField = (field: FormField, value: string) => {
    if (field.required && !value.trim()) {
      return `${field.label} is required`
    }
    if (field.validation) {
      return field.validation(value)
    }
    return null
  }

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleBlur = (field: FormField) => {
    const value = formData[field.name] || ""
    const error = validateField(field, value)
    if (error) {
      setErrors((prev) => ({ ...prev, [field.name]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Record<string, string> = {}
    fields.forEach((field) => {
      const value = formData[field.name] || ""
      const error = validateField(field, value)
      if (error) {
        newErrors[field.name] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      setIsSuccess(true)
      setFormData({})
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={cn("text-center p-8", className)}>
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
        <p className="text-gray-300">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2">
            {field.label} {field.required && <span className="text-red-400">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={4}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onBlur={() => handleBlur(field)}
              placeholder={field.placeholder}
              className={cn(
                "w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none",
                errors[field.name] ? "border-red-500" : "border-white/20",
              )}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onBlur={() => handleBlur(field)}
              placeholder={field.placeholder}
              className={cn(
                "w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",
                errors[field.name] ? "border-red-500" : "border-white/20",
              )}
            />
          )}

          {errors[field.name] && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              {errors[field.name]}
            </div>
          )}
        </div>
      ))}

      <AnimatedButton type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center">
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" className="mr-2" />
            Submitting...
          </>
        ) : (
          submitText
        )}
      </AnimatedButton>
    </form>
  )
}
