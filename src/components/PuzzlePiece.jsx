/**
 * The puzzle piece from the client's posters, as a decorative accent. It
 * takes its fill from `currentColor`, so colour it with a text-* class.
 * public/favicon.svg is the same path — keep the two in step.
 */
export default function PuzzlePiece({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="12 12 44 44" className={className} fill="currentColor">
      <path d="M16 22h11.2a6.2 6.2 0 1 1 9.6 0H48v11.2a6.2 6.2 0 1 0 0 9.6V52H36.8a6.2 6.2 0 1 0-9.6 0H16V42.8a6.2 6.2 0 1 1 0-9.6z" />
    </svg>
  )
}
