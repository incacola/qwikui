import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="container bg-slate-400 flex h-full flex-col">
      <h1 class="text-3xl font-bold font-sans">Hi 👋</h1>
      <p class="font-mono">
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik UI',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
