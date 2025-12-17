'use client';

import { useState } from 'react';
import { CreditCard, Smartphone, Building2, Heart, RefreshCw } from 'lucide-react';

interface DonationFormProps {
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
  formId?: string;
}

interface FormData {
  donationAmount: string;
  customAmount: string;
  donationMethod: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  isRecurring: boolean;
  recurringFrequency: string;
  tributeType: string;
  tributeName: string;
  isAnonymous: boolean;
  consent: boolean;
}

interface FormErrors {
  donationAmount?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  tributeName?: string;
  consent?: string;
}

const DonationForm: React.FC<DonationFormProps> = ({
  title = "Make Your Gift Today",
  subtitle = "The clock is ticking on climate change. Your gift to My Green Lab empowers scientists to create measurable sustainability in laboratories worldwide. Donate now - our planet can't wait.",
  submitButtonText = "Donate Now",
  formId = "donation-form",
}) => {
  const [formData, setFormData] = useState<FormData>({
    donationAmount: '',
    customAmount: '',
    donationMethod: 'credit-card',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    isRecurring: false,
    recurringFrequency: 'monthly',
    tributeType: 'none',
    tributeName: '',
    isAnonymous: false,
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const presetAmounts = [
    { value: '25', label: '$25' },
    { value: '50', label: '$50' },
    { value: '100', label: '$100' },
    { value: '250', label: '$250' },
    { value: '500', label: '$500' },
    { value: '1000', label: '$1,000' },
  ];

  const donationMethods = [
    { value: 'credit-card', label: 'Credit Card', icon: CreditCard },
    { value: 'paypal', label: 'PayPal', icon: Smartphone },
    { value: 'bank-transfer', label: 'Bank Transfer', icon: Building2 },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Donation Amount validation
    const amount = formData.donationAmount === 'custom' ? formData.customAmount : formData.donationAmount;
    if (!amount || parseFloat(amount) < 5) {
      newErrors.donationAmount = 'Minimum donation amount is $5';
    }

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Tribute Name validation (if tribute type is selected)
    if (formData.tributeType !== 'none' && !formData.tributeName.trim()) {
      newErrors.tributeName = 'Tribute name is required';
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleAmountSelect = (amount: string) => {
    setFormData(prev => ({
      ...prev,
      donationAmount: amount,
      customAmount: amount === 'custom' ? prev.customAmount : ''
    }));
    
    if (errors.donationAmount) {
      setErrors(prev => ({
        ...prev,
        donationAmount: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      const finalAmount = formData.donationAmount === 'custom' ? formData.customAmount : formData.donationAmount;
      console.log('Donation submitted:', {
        ...formData,
        finalAmount
      });
      
      setIsSubmitted(true);
      setFormData({
        donationAmount: '',
        customAmount: '',
        donationMethod: 'credit-card',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        isRecurring: false,
        recurringFrequency: 'monthly',
        tributeType: 'none',
        tributeName: '',
        isAnonymous: false,
        consent: false,
      });
    } catch (error) {
      console.error('Donation submission error:', error);
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You for Your Generosity!</h3>
        <p className="text-gray-600 mb-4">
          Your donation will help scientists worldwide create measurable sustainability in laboratories.
        </p>
        <p className="text-sm text-gray-500">
          A receipt has been sent to your email address for tax purposes.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form id={formId} onSubmit={handleSubmit} className="space-y-8">
        {/* Donation Amount Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Select Donation Amount <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {presetAmounts.map((amount) => (
              <button
                key={amount.value}
                type="button"
                onClick={() => handleAmountSelect(amount.value)}
                className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all duration-200 ${
                  formData.donationAmount === amount.value
                    ? 'border-mgl-lime bg-mgl-lime text-white'
                    : 'border-gray-300 text-gray-700 hover:border-mgl-lime hover:bg-mgl-lime hover:bg-opacity-10'
                }`}
              >
                {amount.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleAmountSelect('custom')}
              className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all duration-200 ${
                formData.donationAmount === 'custom'
                  ? 'border-mgl-lime bg-mgl-lime text-white'
                  : 'border-gray-300 text-gray-700 hover:border-mgl-lime hover:bg-mgl-lime hover:bg-opacity-10'
              }`}
            >
              Custom
            </button>
          </div>
          
          {formData.donationAmount === 'custom' && (
            <div>
              <input
                type="number"
                name="customAmount"
                value={formData.customAmount}
                onChange={handleInputChange}
                min="5"
                step="1"
                placeholder="Enter custom amount"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent transition-colors ${
                  errors.donationAmount ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
          )}
          
          {errors.donationAmount && (
            <p className="mt-2 text-sm text-red-600">{errors.donationAmount}</p>
          )}
        </div>

        {/* Donation Method Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Select your donation method <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {donationMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, donationMethod: method.value }))}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    formData.donationMethod === method.value
                      ? 'border-mgl-lime bg-mgl-lime bg-opacity-10'
                      : 'border-gray-300 hover:border-mgl-lime hover:bg-mgl-lime hover:bg-opacity-5'
                  }`}
                >
                  <IconComponent className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                  <p className="font-medium text-gray-900">{method.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recurring Donation Option */}
        <div className="bg-mgl-light-bg p-4 rounded-lg">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="isRecurring"
              checked={formData.isRecurring}
              onChange={handleInputChange}
              className="w-4 h-4 text-mgl-lime border-gray-300 rounded focus:ring-mgl-lime"
            />
            <RefreshCw className="w-5 h-5 ml-3 text-mgl-lime" />
            <span className="ml-2 text-sm font-medium text-gray-700">
              Make this a recurring donation
            </span>
          </label>
          
          {formData.isRecurring && (
            <div className="mt-3 ml-10">
              <select
                name="recurringFrequency"
                value={formData.recurringFrequency}
                onChange={handleInputChange}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </select>
            </div>
          )}
        </div>

        {/* Personal Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent transition-colors ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent transition-colors ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
              Organization (Optional)
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent transition-colors"
              placeholder="Your organization name"
            />
          </div>
        </div>

        {/* Tribute Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Tribute Gift (Optional)</h3>
          
          <select
            name="tributeType"
            value={formData.tributeType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent"
          >
            <option value="none">No tribute</option>
            <option value="honor">In honor of someone</option>
            <option value="memory">In memory of someone</option>
          </select>

          {formData.tributeType !== 'none' && (
            <div>
              <label htmlFor="tributeName" className="block text-sm font-medium text-gray-700 mb-2">
                Tribute Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="tributeName"
                name="tributeName"
                value={formData.tributeName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mgl-lime focus:border-transparent transition-colors ${
                  errors.tributeName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Name of person being honored or remembered"
              />
              {errors.tributeName && (
                <p className="mt-1 text-sm text-red-600">{errors.tributeName}</p>
              )}
            </div>
          )}
        </div>

        {/* Anonymous Donation */}
        <div>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleInputChange}
              className="w-4 h-4 text-mgl-lime border-gray-300 rounded focus:ring-mgl-lime"
            />
            <span className="ml-2 text-sm text-gray-700">
              I wish to make this donation anonymously
            </span>
          </label>
        </div>

        {/* Privacy Consent */}
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className={`mt-1 w-4 h-4 text-mgl-lime border-gray-300 rounded focus:ring-mgl-lime ${
                errors.consent ? 'border-red-500' : ''
              }`}
            />
            <span className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <a href="/data-privacy" className="text-mgl-lime hover:underline">
                privacy policy
              </a>{' '}
              and consent to receive a tax receipt via email. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-red-600">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-mgl-lime text-mgl-dark font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-mgl-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              submitButtonText
            )}
          </button>
        </div>

        {/* Security Note */}
        <div className="text-center text-sm text-gray-500">
          <p>Your donation is secure and encrypted. All donations are tax-deductible to the extent allowed by law.</p>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
