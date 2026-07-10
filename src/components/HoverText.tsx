export function HoverText({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span className="hover-word" key={`${word}-${i}`}>
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}
