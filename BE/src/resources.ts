import mongoose, { Schema, type Model } from "mongoose";

type Stored = { code: string } & Record<string, unknown>;
type Field = StringConstructor | BooleanConstructor;

export type Resource = {
  path: string;
  model: Model<Stored>;
  rows: Record<string, unknown>[];
};

const text = { type: String, required: true };
const optional = { type: String, default: "" };
const flag = { type: Boolean, default: false };

function resource(name: string, path: string, fields: Record<string, { type: Field; required?: boolean; default?: string | boolean }>, rows: Record<string, unknown>[]): Resource {
  const schema = new Schema({ code: { ...text, unique: true }, ...fields }, { timestamps: true });
  const existing = mongoose.models[name] as Model<Stored> | undefined;
  const model = existing ?? mongoose.model<Stored>(name, schema);
  return { path, model, rows };
}

export const resources: Resource[] = [
  resource("Client", "clients", { name: text, email: text, country: text, kyc: text, balance: text }, [
    { id: "CL-2041", name: "Amina Rahman", email: "amina.rahman@email.com", country: "Pakistan", kyc: "In review", balance: "$60,590.22" },
    { id: "CL-1988", name: "Jonas Keller", email: "jonas.keller@email.com", country: "Germany", kyc: "Approved", balance: "$18,220.10" },
    { id: "CL-1882", name: "Leila Haddad", email: "leila.haddad@email.com", country: "UAE", kyc: "Rejected", balance: "$0.00" },
    { id: "CL-1760", name: "Owen Blake", email: "owen.blake@email.com", country: "United Kingdom", kyc: "Approved", balance: "$102,440.00" },
  ]),
  resource("KycDocument", "kyc", { client: text, doc: text, status: text, submitted: text }, [
    { id: "KYC-331", client: "Amina Rahman", doc: "Passport · front", status: "Pending", submitted: "06 Oct 2026" },
    { id: "KYC-328", client: "Amina Rahman", doc: "Proof of address", status: "Pending", submitted: "06 Oct 2026" },
    { id: "KYC-301", client: "Leila Haddad", doc: "National ID · back", status: "Rejected", submitted: "01 Oct 2026" },
  ]),
  resource("MoneyRequest", "money", { client: text, method: text, amount: text, status: text }, [
    { id: "DP-8821", client: "Owen Blake", method: "Bank wire", amount: "$15,000", status: "Pending" },
    { id: "DP-8814", client: "Jonas Keller", method: "Card", amount: "$500", status: "Pending" },
    { id: "WD-4402", client: "Amina Rahman", method: "Local transfer", amount: "$400", status: "Pending" },
    { id: "WD-4390", client: "Owen Blake", method: "Crypto", amount: "$2,200", status: "Approved" },
  ]),
  resource("Ticket", "tickets", { subject: text, from: text, status: text, updated: text, message: optional }, [
    { id: "T-118", subject: "Leverage change on 820552", from: "Amina Rahman", status: "Open", updated: "2h ago" },
    { id: "T-112", subject: "Deposit not showing", from: "Jonas Keller", status: "Waiting", updated: "1d ago" },
    { id: "T-098", subject: "Close demo account", from: "Leila Haddad", status: "Closed", updated: "6d ago" },
  ]),
  resource("Transaction", "transactions", { type: text, account: text, amount: text, status: text, date: text }, [
    { id: "TX-10482", type: "Deposit", account: "820441 · Standard", amount: "+$2,500.00", status: "Completed", date: "06 Oct 2026" },
    { id: "TX-10471", type: "Withdrawal", account: "820441 · Standard", amount: "-$400.00", status: "Pending", date: "05 Oct 2026" },
    { id: "TX-10440", type: "Internal transfer", account: "820552 · ECN", amount: "$1,000.00", status: "Completed", date: "02 Oct 2026" },
    { id: "TX-10412", type: "Adjustment", account: "820441 · Standard", amount: "+$15.00", status: "Completed", date: "28 Sep 2026" },
    { id: "TX-10390", type: "Deposit", account: "820339 · Demo", amount: "+$10,000.00", status: "Completed", date: "21 Sep 2026" },
  ]),
  resource("TradingAccount", "trading-accounts", { server: text, platform: text, type: text, leverage: text, currency: text, balance: text }, [
    { id: "SIM-820441", server: "Simulated", platform: "Web", type: "Silver", leverage: "Not published", currency: "USD", balance: "0.00" },
    { id: "SIM-820552", server: "Simulated", platform: "Web", type: "Gold", leverage: "Not published", currency: "USD", balance: "0.00" },
  ]),
  resource("Announcement", "announcements", { title: text, body: text }, [
    { id: "AN-1", title: "Swap-free request window", body: "Open until Friday. Sample notice." },
    { id: "AN-2", title: "Platform maintenance", body: "Sunday 02:00–03:00. No live session." },
  ]),
  resource("Instrument", "instruments", { market: text, spread: text, leverage: text, swap: optional }, [
    { id: "EURUSD", market: "Forex", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "GBPUSD", market: "Forex", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "USDJPY", market: "Forex", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "XAUUSD", market: "Metals", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "XAGUSD", market: "Metals", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "US30", market: "Indices", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "AAPL", market: "Shares", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "USOIL", market: "Energies", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "WHEAT", market: "Commodities", spread: "Not published", leverage: "Not published", swap: "Not published" },
    { id: "BTCUSD", market: "Crypto CFDs", spread: "Not published", leverage: "Not published", swap: "Not published" },
  ]),
  resource("AccountType", "account-types", { swapFree: flag, note: text }, [
    { id: "Silver", swapFree: false, note: "Entry account. Commercial terms are not published yet." },
    { id: "Gold", swapFree: false, note: "Active account. Commercial terms are not published yet." },
    { id: "Platinum", swapFree: false, note: "Higher-volume account. Commercial terms are not published yet." },
    { id: "Islamic", swapFree: true, note: "Swap-free flag. Symbol coverage is not published yet." },
  ]),
  resource("AuditEntry", "audit", { time: text, actor: text, action: text, target: text }, [
    { id: "AU-1", time: "06 Oct · 11:42", actor: "Sara Qureshi", action: "Viewed KYC document", target: "KYC-331" },
    { id: "AU-2", time: "06 Oct · 09:10", actor: "Finance bot", action: "Marked deposit received", target: "DP-8790" },
    { id: "AU-3", time: "05 Oct · 18:22", actor: "Sara Qureshi", action: "Rejected address proof", target: "KYC-301" },
  ]),
];
