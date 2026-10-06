export default function DevModeBanner() {
  return (
    <p className="bg-[#e7c98a] px-4 py-2 text-center text-xs font-medium text-[#141b2b]">
      Development mode. Quotes, balances, and orders are simulated. No live broker or payment provider is connected.
    </p>
  );
}
