import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_ByiVjAKM.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_C-MwmoOz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://chatkagolebia.pl");
const prerender = false;
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Sign in</h1> <p>New here? <a href="/register">Create an account</a></p> <form action="/api/auth/signin" method="post"> <label for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })}`;
}, "C:/Users/Iga/Documents/Code/chatka-golebia/src/pages/signin.astro", void 0);

const $$file = "C:/Users/Iga/Documents/Code/chatka-golebia/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
