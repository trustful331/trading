export const navLinks = [
  { label: "Markets", to: "/markets" },
  { label: "Accounts", to: "/accounts" },
  { label: "Platforms", to: "/platforms" },
  { label: "Conditions", to: "/conditions" },
  { label: "Funding", to: "/funding" },
  { label: "Education", to: "/education" },
  { label: "Company", to: "/about" },
];

export const ticker = [
  { symbol: "EURUSD", price: "1.08642", change: "+0.12%", up: true },
  { symbol: "GBPUSD", price: "1.27110", change: "-0.08%", up: false },
  { symbol: "USDJPY", price: "149.32", change: "+0.21%", up: true },
  { symbol: "XAUUSD", price: "2,641.30", change: "+0.44%", up: true },
  { symbol: "XAGUSD", price: "31.42", change: "-0.18%", up: false },
  { symbol: "US30", price: "42,180", change: "+0.31%", up: true },
  { symbol: "NAS100", price: "19,842", change: "+0.52%", up: true },
  { symbol: "UK100", price: "8,274", change: "-0.11%", up: false },
  { symbol: "BTCUSD", price: "67,420", change: "+1.14%", up: true },
  { symbol: "ETHUSD", price: "2,486", change: "+0.66%", up: true },
  { symbol: "USOIL", price: "78.46", change: "-0.27%", up: false },
  { symbol: "UKOIL", price: "82.10", change: "+0.09%", up: true },
];

export const marketGroups = [
  {
    id: "forex",
    title: "Forex",
    blurb: "Majors, minors, and exotics with tight raw spreads.",
    count: "60+ pairs",
    items: ["EURUSD", "GBPUSD", "USDJPY", "AUDUSD", "USDCAD", "EURGBP"],
  },
  {
    id: "metals",
    title: "Metals",
    blurb: "Gold, silver, and platinum quoted to the tick.",
    count: "Spot metals",
    items: ["XAUUSD", "XAGUSD", "XPTUSD"],
  },
  {
    id: "indices",
    title: "Indices",
    blurb: "Wall Street, London, Frankfurt, and Tokyo cash hours.",
    count: "Global cash",
    items: ["US30", "NAS100", "UK100", "GER40", "JP225"],
  },
  {
    id: "shares",
    title: "Shares",
    blurb: "Single-name CFDs. The symbol list is a placeholder until the instrument book is confirmed.",
    count: "Equities",
    items: ["AAPL", "AMZN", "TSLA"],
  },
  {
    id: "commodities",
    title: "Commodities",
    blurb: "Agricultural markets such as wheat and corn, once specifications are published.",
    count: "Ags",
    items: ["WHEAT", "CORN"],
  },
  {
    id: "crypto",
    title: "Crypto CFDs",
    blurb: "Weekend markets without owning the coin.",
    count: "24/7",
    items: ["BTCUSD", "ETHUSD", "SOLUSD"],
  },
  {
    id: "energies",
    title: "Energies",
    blurb: "Crude benchmarks for macro desks.",
    count: "WTI & Brent",
    items: ["USOIL", "UKOIL", "NATGAS"],
  },
];

export const instruments = [
  { symbol: "EURUSD", market: "Forex", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "GBPUSD", market: "Forex", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "USDJPY", market: "Forex", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "XAUUSD", market: "Metals", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "XAGUSD", market: "Metals", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "US30", market: "Indices", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "AAPL", market: "Shares", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "USOIL", market: "Energies", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "WHEAT", market: "Commodities", spread: "Not published", leverage: "Not published", swap: "Not published" },
  { symbol: "BTCUSD", market: "Crypto CFDs", spread: "Not published", leverage: "Not published", swap: "Not published" },
];

export const accounts = [
  {
    name: "Silver",
    price: "Not published",
    spread: "Not published",
    commission: "Not published",
    leverage: "Not published",
    best: "Newer traders",
    points: ["Configured in the back office", "Minimum deposit unpublished", "Swap applies"],
  },
  {
    name: "Gold",
    price: "Not published",
    spread: "Not published",
    commission: "Not published",
    leverage: "Not published",
    best: "Active traders",
    featured: true,
    points: ["Configured in the back office", "Spread unpublished", "Swap applies"],
  },
  {
    name: "Platinum",
    price: "Not published",
    spread: "Not published",
    commission: "Not published",
    leverage: "Not published",
    best: "Higher volume",
    points: ["Terms come from configuration", "No invented commission", "Swap-free is a separate account"],
  },
];

export const faqs = [
  {
    q: "Is this a live brokerage?",
    a: "This workspace is in development mode. Quotes and balances are simulated until a broker and payment provider are connected.",
  },
  {
    q: "What can I trade?",
    a: "The marketing site shows forex, metals, indices, crypto CFDs, and energies. Figures are illustrative.",
  },
  {
    q: "How do deposits work?",
    a: "The portal shows card, bank, local transfer, and crypto layouts. Nothing is charged in this version.",
  },
  {
    q: "Do I need documents?",
    a: "The KYC screens show identity and address uploads with pending, approved, and rejected states.",
  },
  {
    q: "Can I switch language?",
    a: "English is the design language for this pass. Urdu and RTL can be layered on the same layout later.",
  },
];

export const lessons = [
  { title: "What a pip actually is", level: "Start", time: "6 min" },
  { title: "Margin, equity, and free margin", level: "Core", time: "9 min" },
  { title: "Why leverage cuts both ways", level: "Risk", time: "8 min" },
  { title: "Reading a candle without the myth", level: "Charts", time: "11 min" },
  { title: "Swaps overnight", level: "Costs", time: "7 min" },
  { title: "Building a position size", level: "Practice", time: "10 min" },
];

export const calendarEvents = [
  { time: "12:30", region: "USD", event: "Non-Farm Payrolls", impact: "High", forecast: "175K", previous: "142K" },
  { time: "14:00", region: "USD", event: "ISM Services PMI", impact: "High", forecast: "52.1", previous: "51.5" },
  { time: "16:00", region: "EUR", event: "ECB President speech", impact: "Medium", forecast: "—", previous: "—" },
  { time: "18:00", region: "GBP", event: "BoE rate decision", impact: "High", forecast: "4.50%", previous: "4.75%" },
  { time: "21:30", region: "CAD", event: "Employment change", impact: "Medium", forecast: "22.5K", previous: "-2.1K" },
];

export const legalPages: Record<string, { title: string; body: string[] }> = {
  terms: {
    title: "Terms of use",
    body: [
      "These pages are placeholders. They are not a client agreement and not legal advice.",
      "A licensed firm would replace this copy with counsel-approved terms covering account opening, order handling, pricing, and complaints.",
    ],
  },
  privacy: {
    title: "Privacy",
    body: [
      "A production site would explain what personal data is collected, why, how long it is kept, and how a person can export or delete it.",
      "This preview stores only a theme preference in the browser.",
    ],
  },
  risk: {
    title: "Risk disclosure",
    body: [
      "Contracts for difference are leveraged. Losses can exceed a deposit. Past performance of a sample chart is not a guide to future results.",
      "Nothing in this design is an offer to invest, a recommendation, or an invitation to trade real funds.",
    ],
  },
  aml: {
    title: "AML and KYC policy",
    body: [
      "A licensed broker documents identity checks, source of funds, and ongoing monitoring. The upload screens here only show how that review would look.",
      "No documents are stored. The dropzone is visual.",
    ],
  },
  cookies: {
    title: "Cookie policy",
    body: [
      "A live site would list strictly necessary cookies, analytics, and marketing cookies, with a consent banner.",
      "This preview keeps a small UI preference in local storage so the theme survives a refresh.",
    ],
  },
};

export const portalNav = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Deposit", to: "/deposit" },
  { label: "Withdraw", to: "/withdraw-funds" },
  { label: "Questionnaire", to: "/questionnaire" },
  { label: "Trading accounts", to: "/trading-info" },
  { label: "Documents", to: "/upload-documents" },
  { label: "Transactions", to: "/transactions-history" },
  { label: "Trade", to: "/platform" },
  { label: "Security", to: "/security" },
  { label: "Profile", to: "/profile" },
  { label: "Support", to: "/support" },
  { label: "Partners", to: "/partners" },
];

export const adminNav = [
  { label: "Overview", to: "/admin" },
  { label: "Clients", to: "/admin/users" },
  { label: "KYC queue", to: "/admin/kyc" },
  { label: "Deposits", to: "/admin/deposits" },
  { label: "Withdrawals", to: "/admin/withdrawals" },
  { label: "Tickets", to: "/admin/tickets" },
  { label: "Announcements", to: "/admin/announcements" },
  { label: "Conditions", to: "/admin/conditions" },
  { label: "Instruments", to: "/admin/instruments" },
  { label: "Account types", to: "/admin/account-types" },
  { label: "Audit log", to: "/admin/audit-logs" },
];

export const transactions = [
  { id: "TX-10482", type: "Deposit", account: "820441 · Standard", amount: "+$2,500.00", status: "Completed", date: "06 Oct 2026" },
  { id: "TX-10471", type: "Withdrawal", account: "820441 · Standard", amount: "-$400.00", status: "Pending", date: "05 Oct 2026" },
  { id: "TX-10440", type: "Internal transfer", account: "820552 · ECN", amount: "$1,000.00", status: "Completed", date: "02 Oct 2026" },
  { id: "TX-10412", type: "Adjustment", account: "820441 · Standard", amount: "+$15.00", status: "Completed", date: "28 Sep 2026" },
  { id: "TX-10390", type: "Deposit", account: "820339 · Demo", amount: "+$10,000.00", status: "Completed", date: "21 Sep 2026" },
];

export const tradingAccounts = [
  { login: "SIM-820441", server: "Simulated", platform: "Web", type: "Silver", leverage: "Not published", currency: "USD", balance: "0.00" },
  { login: "SIM-820552", server: "Simulated", platform: "Web", type: "Gold", leverage: "Not published", currency: "USD", balance: "0.00" },
];

export const clients = [
  { id: "CL-2041", name: "Amina Rahman", email: "amina.rahman@email.com", country: "Pakistan", kyc: "In review", balance: "$60,590.22" },
  { id: "CL-1988", name: "Jonas Keller", email: "jonas.keller@email.com", country: "Germany", kyc: "Approved", balance: "$18,220.10" },
  { id: "CL-1882", name: "Leila Haddad", email: "leila.haddad@email.com", country: "UAE", kyc: "Rejected", balance: "$0.00" },
  { id: "CL-1760", name: "Owen Blake", email: "owen.blake@email.com", country: "United Kingdom", kyc: "Approved", balance: "$102,440.00" },
];

export const kycQueue = [
  { id: "KYC-331", client: "Amina Rahman", doc: "Passport · front", status: "Pending", submitted: "06 Oct 2026" },
  { id: "KYC-328", client: "Amina Rahman", doc: "Proof of address", status: "Pending", submitted: "06 Oct 2026" },
  { id: "KYC-301", client: "Leila Haddad", doc: "National ID · back", status: "Rejected", submitted: "01 Oct 2026" },
];

export const moneyQueue = [
  { id: "DP-8821", client: "Owen Blake", method: "Bank wire", amount: "$15,000", status: "Pending" },
  { id: "DP-8814", client: "Jonas Keller", method: "Card", amount: "$500", status: "Pending" },
  { id: "WD-4402", client: "Amina Rahman", method: "Local transfer", amount: "$400", status: "Pending" },
  { id: "WD-4390", client: "Owen Blake", method: "Crypto", amount: "$2,200", status: "Approved" },
];

export const tickets = [
  { id: "T-118", subject: "Leverage change on 820552", from: "Amina Rahman", status: "Open", updated: "2h ago" },
  { id: "T-112", subject: "Deposit not showing", from: "Jonas Keller", status: "Waiting", updated: "1d ago" },
  { id: "T-098", subject: "Close demo account", from: "Leila Haddad", status: "Closed", updated: "6d ago" },
];

export const auditRows = [
  { time: "06 Oct · 11:42", actor: "Sara Qureshi", action: "Viewed KYC document", target: "KYC-331" },
  { time: "06 Oct · 09:10", actor: "Finance bot", action: "Marked deposit received", target: "DP-8790" },
  { time: "05 Oct · 18:22", actor: "Sara Qureshi", action: "Rejected address proof", target: "KYC-301" },
];

export const questions = [
  {
    title: "Trading experience",
    prompt: "How long have you traded leveraged products?",
    options: ["Never", "Under 1 year", "1–3 years", "More than 3 years"],
  },
  {
    title: "Financial picture",
    prompt: "What share of savings would this account represent?",
    options: ["Under 10%", "10–25%", "25–50%", "Most of my savings"],
  },
  {
    title: "Risk understanding",
    prompt: "If a position moves against you, what can happen?",
    options: [
      "I can only lose the margin on that trade",
      "I can lose more than my deposit",
      "The firm covers the loss",
      "I am not sure",
    ],
  },
  {
    title: "Source of funds",
    prompt: "Where will deposits mainly come from?",
    options: ["Salary", "Savings", "Business income", "Other"],
  },
];
