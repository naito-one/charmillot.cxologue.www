const _show = ref(false)
const _isError = ref(false)
const _lastMessage = ref('')
const _timeout: Ref<ReturnType<typeof setTimeout> | null> = ref(null)

function showMessage(message: string, isError: boolean, time?: number) {
  _lastMessage.value = message
  _isError.value = isError

  hideMessage()

  // let the CSS update so that the animation for the message box may trigger again
  // TODO: maybe use Promise.resolve().then
  requestAnimationFrame(() => {
    _show.value = true

    _timeout.value = setTimeout(() => {
      _show.value = false
    }, time || 10000)
  })
}

function hideMessage() {
  if (_timeout.value) {
    clearTimeout(_timeout.value)
    _timeout.value = null
  }

  _show.value = false
}

export function useMessageBox() {
  return {
    show: _show,
    isError: _isError,
    lastMessage: _lastMessage,
    showMessage,
    hideMessage,
  }
}
