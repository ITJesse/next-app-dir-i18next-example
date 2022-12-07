import i18next from '../../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({ lng }) => {
  const { t } = await i18next(lng, 'footer')
  return <FooterBase t={t} lng={lng} />
}
