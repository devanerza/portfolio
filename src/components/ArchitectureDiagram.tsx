import type { ComponentType } from 'react'
import { ApiIcon, DatabaseIcon, DeployIcon, FrontendIcon } from './icons'

type Node = {
  label: string
  sublabel: string
  icon: ComponentType<{ className?: string }>
}

const nodes: Node[] = [
  { label: 'Frontend', sublabel: 'interface', icon: FrontendIcon },
  { label: 'API', sublabel: 'services & logic', icon: ApiIcon },
  { label: 'Database', sublabel: 'PostgreSQL · state', icon: DatabaseIcon },
  { label: 'Deployment', sublabel: 'delivery & scale', icon: DeployIcon },
]

export function ArchitectureDiagram() {
  return (
    <div className="arch-panel overflow-hidden p-5 sm:p-8" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          system overview
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 sm:block">
          production
        </span>
      </div>

      <div className="mt-7 flex flex-col items-stretch md:mt-9 md:flex-row md:items-center md:justify-between">
        {nodes.map((node, index) => (
          <div key={node.label} className="contents">
            {index > 0 && (
              <div className="arch-connector">
                <span className="arch-connector-line" />
                <span className="arch-connector-packet" />
              </div>
            )}
            <div className="arch-node flex min-w-0 flex-1 items-center gap-3.5 px-5 py-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] border border-white/10 bg-white/5 text-white/70">
                <node.icon className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] font-medium leading-none text-white/90">
                  {node.label}
                </span>
                <span className="mt-1.5 block truncate font-mono text-[11px] leading-none text-white/40">
                  {node.sublabel}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-2.5 border-t border-white/10 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 md:mt-9">
        <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#34d399]" />
        all systems operational
      </div>
    </div>
  )
}
