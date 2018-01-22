/* global modules */

export default async () => {
  const rootRegex = new RegExp(`^${modules['theme-default'].apiPath}`);
  const items = await (await fetch(`${modules['theme-default'].apiPath}/menu`)).json();

  const methods = {
    isRootPath(path) { return rootRegex.test(path) },
    getRootPath(path) { return path.replace(rootRegex, '') || '/' }
  };

  const data = () => ({ items });

  const template = `
    <div class="nav">
      Nav
      <ul>
        <li v-for="{ url, display } in items">
          <router-link :to="url">{{ display }}</router-link>
        </li>
      </ul>
    </div>
`;

  return { template, data, methods };
};