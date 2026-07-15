/**
 * Het officiële embleem van Nino's Barber.
 * Zet het bestand neer als /public/logo.png (transparante PNG is ideaal).
 * Het embleem bevat de naam al, dus er staat geen los woordmerk naast.
 */
export default function Logo({ height = 40 }: { height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Nino's Barber"
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
