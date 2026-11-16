import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Globe, Languages, CalendarCheck, Bot, Package, Building2 } from 'lucide-react';

/**
 * Work we have actually shipped, with the live URL against each one.
 *
 * The rule for this page: every claim on it is checkable by clicking the
 * link. No invented clients, no invented people, no invented numbers. Where
 * there is a figure it is something countable on the live site — the number
 * of languages the shop runs in, how far ahead the booking calendar opens —
 * rather than a result we have attributed to ourselves.
 *
 * That is partly principle and partly law: since 6 April 2025 the Digital
 * Markets, Competition and Consumers Act 2024 makes a fabricated testimonial
 * an automatically unfair commercial practice, which the CMA can fine without
 * going near a court.
 */

type Project = {
  name: string;
  url: string;
  host: string;
  sector: string;
  place: string;
  summary: string;
  brief: string;
  built: string[];
  facts: { icon: typeof Globe; label: string; sub: string }[];
  accent: string;
  border: string;
};

const projects: Project[] = [
  {
    name: 'WOCA',
    url: 'https://wocalk.com/',
    host: 'wocalk.com',
    sector: 'Professional services',
    place: 'Colombo, Sri Lanka',
    summary: 'Company registration in Sri Lanka, run entirely from abroad.',
    brief:
      'WOCA registers companies in Sri Lanka for Sri Lankans living overseas — New York, London, Dubai, Melbourne. The hard part was never the filing. It was that a customer eight time zones away cannot see whether anything is happening, and the usual answer is a relative running errands in Colombo.',
    built: [
      'A site built around the distance rather than apologising for it — live clocks across the cities clients actually live in, so "while you sleep, Colombo is filing" is shown instead of claimed',
      'Six service lines mapped out past registration: corporate secretarial, tax and accounting, bank and CDS accounts, branding, shipping and customs, and IT',
      'A three-step flow that starts with a passport photograph sent on WhatsApp, because that is what people will actually do from another continent',
      'An AI assistant on the page, and a client portal where every document and every step is visible without asking anyone',
    ],
    facts: [
      { icon: Globe, label: '10 cities', sub: 'live clocks across client time zones' },
      { icon: Building2, label: '6 services', sub: 'past the certificate' },
      { icon: Bot, label: 'AI + portal', sub: 'progress without chasing' },
    ],
    accent: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/20',
  },
  {
    name: 'PrinterCart',
    url: 'https://printercart.lk/',
    host: 'printercart.lk',
    sector: 'E-commerce',
    place: 'Sri Lanka',
    summary: 'A thousand consumables, and the only question that matters is "will it fit my printer?"',
    brief:
      'Printers, scanners, toners, inks and label tapes across HP, Canon, Brother, Epson and Lexmark. On a catalogue this size the customer is rarely browsing — they are holding an empty cartridge trying to work out which of four hundred near-identical products replaces it. Get that wrong and you have a return, not a sale.',
    built: [
      'A Shopify storefront organised by the way people search for consumables — by printer, by cartridge, by brand — rather than by supplier category',
      'Product-fit help where the confusion actually is: an on-site AI assistant, and a WhatsApp route where a customer photographs the old cartridge and gets told what replaces it',
      'The full interface in English, Sinhala and Tamil, so the shop reads natively to the whole market rather than to part of it',
      'Checkout built for how Sri Lanka buys: cash on delivery alongside card, 24-hour delivery in Colombo and next day island-wide',
    ],
    facts: [
      { icon: Package, label: '1,000+', sub: 'SKUs across five brands' },
      { icon: Languages, label: '3 languages', sub: 'English, Sinhala, Tamil' },
      { icon: Bot, label: 'Fit assistant', sub: 'on-site AI and WhatsApp' },
    ],
    accent: 'from-purple-600/20 to-pink-600/10',
    border: 'border-purple-500/20',
  },
  {
    name: 'Sakura Sports',
    url: 'https://sakurasports.lk/',
    host: 'sakurasports.lk',
    sector: 'Leisure & bookings',
    place: 'Nainamadama, Sri Lanka',
    summary: 'Two floodlit cricket nets, turned into something you can book at eleven at night.',
    brief:
      'A practice facility with two nets, one of them fitted with a bowling machine that runs to 140km/h. Everything about the business is physical and hourly, which makes it exactly the kind of place that loses bookings to a missed phone call — the enquiry arrives at 9pm and the answer comes the next morning, by which time they have gone elsewhere.',
    built: [
      'A booking system showing genuinely free slots two weeks ahead, in half-hour blocks, so a player books at the moment they decide rather than waiting on a call back',
      'Pricing published openly for each combination — softball, hardball, with or without the bowling machine — because the first question is always what it costs',
      'A location page written for the surrounding towns, Wennappuwa, Negombo, Marawila and Chilaw, so local searches find the nets instead of finding nothing',
      'WhatsApp as a first-class contact route, next to the phone number, matched to how the customers actually message',
    ],
    facts: [
      { icon: CalendarCheck, label: '2 weeks', sub: 'of bookable slots, live' },
      { icon: Globe, label: '4 towns', sub: 'covered by local search' },
      { icon: Package, label: '14 hrs/day', sub: '9am to 11pm, every day' },
    ],
    accent: 'from-emerald-600/20 to-teal-600/10',
    border: 'border-emerald-500/20',
  },
  {
    name: 'Zudaya',
    url: 'https://zudaya.tech',
    host: 'zudaya.tech',
    sector: 'Our own product',
    place: 'London, UK',
    summary: 'One app for a restaurant, in place of four subscriptions that do not speak to each other.',
    brief:
      'Not client work. Zudaya is ours — a hospitality system covering rotas and clock-in, stock and supplier ordering, daily checks with photographs and temperature readings, bookings with a table plan, and the team. We build it, we run it, and we carry the consequences of every decision in it. The reason it belongs on this page is that it is the most honest thing we can show you: the same people, on a product where we cannot blame the brief.',
    built: [
      'A full application rather than a brochure — rotas, clock-in from a phone, stock counts, supplier ordering, compliance checks and a booking diary',
      'Multi-tenant from the ground up, with per-feature permissions a restaurant designs for itself',
      'Hosted entirely in the UK, which is what lets it hold staff records under UK data protection law without a page of transfer clauses',
      'Published pricing, no setup fee, and no commission on anything a restaurant sells',
    ],
    facts: [
      { icon: Building2, label: 'Multi-site', sub: 'one app across a group' },
      { icon: Globe, label: 'UK hosted', sub: 'data stays in London' },
      { icon: Bot, label: 'In build', sub: 'and shipping weekly' },
    ],
    accent: 'from-sky-600/20 to-cyan-600/10',
    border: 'border-sky-500/20',
  },
];

export default function Portfolio() {
  return (
    <div className="bg-dark-surface min-h-screen pt-24 pb-16 font-outfit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-4">Portfolio</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Work you can <span className="text-gradient">click on.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Four live sites, each with its address against it. Everything described below can be
            checked by opening the link — which is the only kind of proof worth putting on a page.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((p) => (
            <motion.article
              key={p.host}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl border ${p.border} bg-gradient-to-br ${p.accent} p-8 sm:p-12`}
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full">
                  {p.sector}
                </span>
                <span className="text-xs text-gray-500">{p.place}</span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{p.name}</h2>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                >
                  {p.host} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xl text-white/90 font-medium mb-8 leading-snug max-w-3xl">{p.summary}</p>

              <div className="grid lg:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">The brief</h3>
                  <p className="text-gray-400 leading-relaxed">{p.brief}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3">What we built</h3>
                  <ul className="space-y-2.5">
                    {p.built.map((b, j) => (
                      <li key={j} className="flex gap-3 text-gray-400 leading-relaxed">
                        <span className="text-primary-500/60 mt-1.5 shrink-0">&#8212;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Countable facts, not claimed outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {p.facts.map((f, j) => (
                  <div key={j} className="bg-dark-surface/50 border border-white/5 rounded-2xl p-5 text-center">
                    <f.icon className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{f.label}</div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{f.sub}</div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Note on what is here and what is not */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border border-white/5 bg-dark-panel rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">A note on this page</h3>
          <p className="text-gray-400 leading-relaxed">
            There are no client quotes here and no percentages. Plenty of agencies put both on a
            page like this and most of them are invented. Everything above is either visible on the
            live site or something we built and can walk you through — and if you want to speak to
            somebody we have worked with, ask and we will introduce you properly rather than print
            a sentence with a stock photograph next to it.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-[#12151c] border border-white/5 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Want something like these?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Tell us what the business does and where the work is piling up. We will tell you what
            we would build and roughly what it takes &mdash; before anybody signs anything.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-white text-dark-surface font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl text-lg"
          >
            Book a conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
