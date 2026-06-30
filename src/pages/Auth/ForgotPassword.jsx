import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { ROUTES } from '../../constants/routes'
import toast from 'react-hot-toast'

const ForgotPassword = () => {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  const schema = z.object({
    email: z.string().email(t('auth.validation.validEmail')),
  })

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000))
    setEmail(data.email)
    setSent(true)
    toast.success('Reset link sent!')
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
          {t('auth.forgot.checkInbox')}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
          {t('auth.forgot.resetLinkSent')}
        </p>
        <p className="font-semibold text-gray-900 dark:text-white mb-8">{email}</p>
        <p className="text-xs text-gray-400 mb-6">
          {t('auth.forgot.notReceived')}{' '}
          <button onClick={() => setSent(false)} className="text-brand-600 dark:text-brand-400 hover:underline">
            {t('auth.forgot.tryAgain')}
          </button>
        </p>
        <Link to={ROUTES.LOGIN} className="btn-outline btn-md inline-flex gap-2">
          <ArrowLeft size={15} />
          {t('auth.forgot.backToSignIn')}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
          {t('auth.forgot.title')}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          {t('auth.forgot.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="label-base">{t('auth.register.email')}</label>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              {...register('email')}
              type="email"
              placeholder="you@example.com"
              className={`input-base pl-11 ${errors.email ? 'border-brand-400' : ''}`}
            />
          </div>
          {errors.email && <p className="mt-1.5 text-xs text-brand-600 dark:text-brand-400">⚠ {errors.email.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-brand btn-lg w-full justify-center gap-2"
        >
          {isSubmitting ? t('common.loading') : t('auth.forgot.sendResetLink')}
        </button>
      </form>

      <Link
        to={ROUTES.LOGIN}
        className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft size={15} />
        {t('auth.forgot.backToSignIn')}
      </Link>
    </motion.div>
  )
}

export default ForgotPassword
