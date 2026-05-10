/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Search, Users, MapPin, ArrowRight, Table as TableIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GUEST_LIST, SEATING_DATA } from './constants';

export default function App() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'names' | 'tables'>('tables');

  const filteredGuests = useMemo(() => {
    return GUEST_LIST.filter(guest => 
      guest.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredTables = useMemo(() => {
    const searchTerm = search.toLowerCase();
    if (!searchTerm) return Object.entries(SEATING_DATA);

    return Object.entries(SEATING_DATA).filter(([_, names]) => 
      names.some(name => name.toLowerCase().includes(searchTerm))
    );
  }, [search]);

  return (
    <div className="min-h-screen pb-20 bg-gold-light text-maroon">
      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center bg-gold/10 border-b border-maroon/10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <h1 className="font-serif text-4xl mb-2 tracking-tight text-maroon">Guest Seating</h1>
          <p className="text-maroon/60 font-light text-sm uppercase tracking-widest italic">
            Find your table assignment
          </p>
        </motion.div>
      </header>

      {/* Control Bar */}
      <div className="sticky top-0 z-10 bg-gold-light/90 backdrop-blur-md border-b border-maroon/10 py-4 px-6 mb-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-maroon/40 group-focus-within:text-maroon transition-colors" />
            <input
              type="text"
              placeholder="Search your name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/50 border border-maroon/10 rounded-full py-3.5 pl-12 pr-6 text-lg focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none text-maroon placeholder:text-maroon/30"
            />
          </div>

          <div className="flex bg-gold/10 p-1 rounded-full items-center border border-maroon/5">
            <button
              onClick={() => setView('tables')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium transition-all ${
                view === 'tables' ? 'bg-maroon shadow-md text-gold-light' : 'text-maroon/60 hover:text-maroon'
              }`}
            >
              <TableIcon className="w-4 h-4" />
              Seating Chart
            </button>
            <button
              onClick={() => setView('names')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium transition-all ${
                view === 'names' ? 'bg-maroon shadow-md text-gold-light' : 'text-maroon/60 hover:text-maroon'
              }`}
            >
              <Users className="w-4 h-4" />
              A - Z List
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {view === 'tables' ? (
            <motion.div
              key="tables-view"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredTables.length > 0 ? (
                filteredTables.map(([table, names], idx) => (
                    <motion.div
                      key={`table-${table}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white rounded-3xl p-6 border border-maroon/10 shadow-sm relative flex flex-col"
                    >
                      <div className="flex items-baseline gap-2 mb-6">
                        <h2 className="font-serif text-4xl text-maroon">Table {table}</h2>
                        <span className="text-maroon/40 font-light text-sm italic">• {names.length} Guests</span>
                      </div>

                      <div className="grid grid-cols-1 gap-2 mt-auto">
                        {names.map((name, nIdx) => {
                          const isMatch = search && name.toLowerCase().includes(search.toLowerCase());
                          return (
                            <div 
                              key={nIdx}
                              className={`py-2.5 px-4 rounded-xl font-medium flex items-center justify-between group transition-colors ${
                                isMatch 
                                  ? 'bg-maroon text-gold-light shadow-md' 
                                  : 'bg-gold/5 text-maroon/80 border border-maroon/5'
                              }`}
                            >
                              {name}
                              {isMatch ? (
                                <MapPin className="w-3 h-3 text-gold-light" />
                              ) : (
                                <ArrowRight className="w-3 h-3 text-maroon/20 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <div className="text-maroon/30 mb-2 font-serif text-xl italic">No tables found for "{search}"</div>
                  <button onClick={() => setSearch('')} className="text-maroon/60 underline text-sm hover:text-maroon transition-colors">View all tables</button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="names-view"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {filteredGuests.length > 0 ? (
                filteredGuests.map((guest, idx) => (
                  <motion.div
                    key={`${guest.name}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx * 0.03, 0.5) }}
                    className="flex items-center justify-between p-4 bg-white/80 rounded-2xl border border-maroon/10 shadow-sm"
                  >
                    <div className="font-medium text-lg text-maroon">{guest.name}</div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase tracking-tighter text-maroon/40 font-semibold mb-[-2px]">TABLE</span>
                        <span className="font-serif text-2xl leading-none text-maroon">{guest.table}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-maroon/30" />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <div className="text-maroon/30 mb-2 font-serif text-xl italic">No results for "{search}"</div>
                  <button onClick={() => setSearch('')} className="text-maroon/60 underline text-sm hover:text-maroon transition-colors">Clear search</button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Branding */}
      <footer className="mt-20 py-12 text-center text-maroon/20 text-xs tracking-[0.2em] uppercase">
        Digital Seating Assistant
      </footer>
    </div>
  );
}
