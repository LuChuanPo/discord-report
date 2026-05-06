// Shared React components: Sidebar, Topbar, Toast, Modal

const { useState, useEffect, useRef, useCallback } = React;

// === Toast manager ===
window.useToasts = function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((msg, kind = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, msg, kind }]);
    setTimeout(() => setToasts((t) => t.filter(x => x.id !== id)), 2800);
  }, []);
  const node = (
    <div className="toast-host">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast--${t.kind}`}>
          <span className="toast__icon">{t.kind === 'success' ? '✓' : t.kind === 'error' ? '✕' : 'ⓘ'}</span>
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  );
  return { push, node };
};

// === Sidebar ===
window.Sidebar = function Sidebar({ active, role = 'admin', currentPage }) {
  const sections = role === 'admin' ? [
    { label: '工作台', items: [
      { id: 'dashboard', label: '总看板', icon: 'dashboard', href: 'admin-dashboard.html' },
      { id: 'customers', label: '客户列表', icon: 'folder', href: 'admin-dashboard.html#customers', count: 10 },
      { id: 'employees', label: '员工管理', icon: 'users', href: 'admin-dashboard.html#employees' },
    ]},
    { label: '数据', items: [
      { id: 'reports', label: '周报与分析', icon: 'chart', href: '#' },
      { id: 'inbox', label: '消息中心', icon: 'inbox', href: '#', count: 3 },
    ]},
    { label: '配置', items: [
      { id: 'sop', label: 'SOP 模板', icon: 'book', href: '#' },
      { id: 'settings', label: '系统设置', icon: 'settings', href: '#' },
    ]},
  ] : [
    { label: '工作台', items: [
      { id: 'today', label: '今日看板', icon: 'dashboard', href: 'admin-dashboard.html' },
      { id: 'entry', label: '数据录入', icon: 'edit', href: 'data-entry.html' },
      { id: 'mine', label: '我的客户', icon: 'folder', href: '#', count: 3 },
    ]},
    { label: '协作', items: [
      { id: 'tasks', label: '任务列表', icon: 'check', href: '#' },
      { id: 'meetings', label: '会议记录', icon: 'calendar', href: '#' },
    ]},
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">AW</div>
        <div className="sidebar__title">
          AIWATCH
          <small>KNOWLEDGE_OS · v0.4</small>
        </div>
      </div>

      {sections.map((sec, i) => (
        <React.Fragment key={i}>
          <div className="sidebar__section">{sec.label}</div>
          {sec.items.map(item => (
            <a
              key={item.id}
              className={`sidebar__item ${active === item.id ? 'sidebar__item--active' : ''}`}
              href={item.href}
            >
              <span className="sidebar__icon"><Icon name={item.icon} size={14} /></span>
              <span>{item.label}</span>
              {item.count != null && <span className="sidebar__count">{item.count}</span>}
            </a>
          ))}
        </React.Fragment>
      ))}

      <div className="sidebar__user">
        <div className="avatar">{role === 'admin' ? 'JZ' : 'LY'}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 12, fontWeight: 500 }}>{role === 'admin' ? '江竹' : '李逸航'}</div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{role === 'admin' ? '管理员' : '执行者'}</div>
        </div>
        <a href="login.html" title="登出" style={{ color: 'var(--ink-3)', display: 'inline-flex' }}><Icon name="logout" size={14} /></a>
      </div>
    </aside>
  );
};

// === Topbar ===
window.Topbar = function Topbar({ crumbs = [] }) {
  return (
    <div className="topbar">
      <div className="crumbs">
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span>/</span>}
            {i === crumbs.length - 1 ? <strong>{c}</strong> : <span style={{color:'var(--ink-3)'}}>{c}</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="topbar__spacer" />
      <div className="topbar__search">
        <Icon name="search" size={12} style={{ color: 'var(--ink-3)' }} />
        <input placeholder="搜索客户、任务、会议..." />
        <kbd>⌘K</kbd>
      </div>
      <button className="btn btn--icon btn--ghost" title="通知"><Icon name="bell" size={14} /></button>
    </div>
  );
};

// === Modal ===
window.Modal = function Modal({ open, onClose, title, children, footer, width }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" style={width ? { width } : undefined} onClick={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <div className="h2">{title}</div>
          <button className="btn btn--icon btn--ghost" onClick={onClose}><Icon name="x" size={14} /></button>
        </div>
        <div className="modal__body">{children}</div>
        {footer && <div className="modal__foot">{footer}</div>}
      </div>
    </div>
  );
};

// === Status pill ===
window.StatusPill = function StatusPill({ status }) {
  const map = {
    normal: { label: '进度正常', cls: 'badge--success' },
    warn:   { label: '告警',     cls: 'badge--warn' },
    block:  { label: '阻塞',     cls: 'badge--danger' },
  };
  const s = map[status] || map.normal;
  return <span className={`badge badge--dot ${s.cls}`}>{s.label}</span>;
};

// === KPI card ===
window.KpiCard = function KpiCard({ label, value, delta, kind = 'cyan', icon, hint }) {
  return (
    <div className={`kpi-card kpi-card--${kind}`}>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <span className="label">{label}</span>
        {icon && <span style={{ color: 'var(--ink-4)' }}><Icon name={icon} size={14} /></span>}
      </div>
      <div className={`kpi kpi-${kind}`}>{value}</div>
      <div className="row" style={{ justifyContent: 'space-between', fontSize: 11 }}>
        {delta != null ? (
          <span className={`delta ${delta >= 0 ? 'delta-up' : 'delta-down'}`}>
            {delta >= 0 ? '↑' : '↓'} {Math.abs(delta)}{typeof delta === 'number' ? ' 较上周' : ''}
          </span>
        ) : <span />}
        {hint && <span className="muted-2 mono" style={{ fontSize: 10 }}>{hint}</span>}
      </div>
    </div>
  );
};

// === SOP 12-week progress bar ===
window.SOPProgress = function SOPProgress({ week = 6 }) {
  const weeks = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 6 }}>
        {weeks.map(w => {
          const done = w < week;
          const current = w === week;
          return (
            <div key={w} style={{
              height: 36,
              borderRadius: 6,
              border: '1px solid ' + (current ? 'var(--cyan)' : done ? 'var(--border-strong)' : 'var(--border)'),
              background: current ? 'var(--cyan-glow)' : done ? 'var(--surface-2)' : 'var(--bg-elev)',
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: current ? 'var(--cyan)' : done ? 'var(--ink-2)' : 'var(--ink-4)',
              fontWeight: current ? 600 : 400,
              boxShadow: current ? '0 0 12px rgba(0,229,255,0.25)' : 'none',
              position: 'relative',
            }}>
              W{w}
              {current && <div style={{ position: 'absolute', bottom: -3, width: 4, height: 4, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)' }} />}
            </div>
          );
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginTop: 8 }}>
        <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', textAlign: 'center', padding: '4px 0', borderRadius: 4, background: 'var(--bg-elev)' }}>W1—W4 · 基础搭建</div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', textAlign: 'center', padding: '4px 0', borderRadius: 4, background: 'var(--bg-elev)' }}>W5—W8 · 质量提升</div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', textAlign: 'center', padding: '4px 0', borderRadius: 4, background: 'var(--bg-elev)' }}>W9—W12 · 成果交付</div>
      </div>
    </div>
  );
};
