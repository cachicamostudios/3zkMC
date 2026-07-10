import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { SUPABASE_URL, SUPABASE_ANON_KEY, isConfigured } from './supabase-config.js';

export const supabase = isConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export { isConfigured };

export async function getSession() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function signUp(email, password) {
  return supabase.auth.signUp({ email, password });
}

export async function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function resetPassword(email) {
  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: new URL('cuenta.html', window.location.href).href,
  });
}

export function onAuthChange(cb) {
  if (!supabase) return;
  supabase.auth.onAuthStateChange((_event, session) => cb(session));
}

// Renders the logged-in/logged-out strip into an element with id="auth-strip".
export async function mountAuthStrip() {
  const el = document.getElementById('auth-strip');
  if (!el) return;

  const paint = (session) => {
    if (session) {
      el.replaceChildren();
      const who = document.createElement('span');
      who.className = 'auth-user';
      who.textContent = session.user.email;
      const out = document.createElement('button');
      out.className = 'auth-btn';
      out.textContent = 'Log Out';
      out.onclick = async () => {
        await signOut();
        window.location.reload();
      };
      el.append(who, out);
    } else {
      const onDownloads = window.location.pathname.endsWith('descargas.html');
      const href = onDownloads ? 'cuenta.html?next=descargas' : 'cuenta.html';
      el.innerHTML = `<a class="auth-btn" href="${href}">Log In / Sign Up</a>`;
    }
  };

  paint(await getSession());
  onAuthChange(paint);
}
