import { Fragment } from 'react'

export function HoverText({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="hover-word">{word}</span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </>
  )
}
