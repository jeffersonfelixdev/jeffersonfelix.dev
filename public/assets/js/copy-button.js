const copyButtonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-copy"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M16 4h2a2 2 0 0 1 2 2v4"/><path d="M21 14H11"/><path d="m15 10-4 4 4 4"/></svg>`
const copiedButtonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`

// use a class selector if available
const blocks = document.querySelectorAll('pre')

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    const div = document.createElement('div')
    div.className = 'copy-button'
    const button = document.createElement('button')

    button.innerHTML = copyButtonSVG
    div.appendChild(button)
    block.prepend(div)

    button.addEventListener('click', async () => {
      await copyCode(block, button)
    })
  }
})

async function copyCode(block, button) {
  const code = block.querySelector('code')
  const text = code.innerText

  await navigator.clipboard.writeText(text)

  // visual feedback that task is completed
  button.innerHTML = copiedButtonSVG

  setTimeout(() => {
    button.innerHTML = copyButtonSVG
  }, 950)
}
