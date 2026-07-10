export function useSmoothScroll() {
  const scrollTo = (href) => {
    const targetId = href.startsWith('#') ? href.slice(1) : href
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return { scrollTo }
}

export default useSmoothScroll
