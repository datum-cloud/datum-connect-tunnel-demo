'use client';

import { InfrastructureDiagram } from '@/components/infrastructure-diagram';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-balance">
            Datum Connect Tunnel Demo
          </h1>
          <p className="text-slate-400 text-lg">
            Virtual Machine → Internet → Laptop
          </p>
        </div>
        <InfrastructureDiagram />
      </div>
    </main>
  );
}
