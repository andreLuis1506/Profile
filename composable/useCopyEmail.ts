import {useShowCopiedEmail} from "~/composable/states";

export const useCopyEmail = () => {
  const email = ['alsss.ads', '@', 'gmail.com'].join('')
  const showCopiedEmail = useShowCopiedEmail()

  function copyEmail() {
    navigator.clipboard.writeText(email)
    showCopiedEmail.value = true
  }

  return { copyEmail, showCopiedEmail }
}
