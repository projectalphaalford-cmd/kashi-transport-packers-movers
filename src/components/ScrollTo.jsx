import { useSmoothScroll } from '../hooks/useSmoothScroll'

export default function ScrollTo({ as: Component = 'a', href, onClick, ...props }) {
  const { scrollTo } = useSmoothScroll()

  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault()
      scrollTo(href)
    }
    onClick?.(e)
  }

  return <Component href={href} onClick={handleClick} {...props} />
}
