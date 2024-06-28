"use client";

export default function Home() {
  return (
    <>
      <nav className="flex justify-center items-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=addressbook%23contacts%40group.v.calendar.google.com&ctz=America%2FSao_Paulo"
          className="border-0 w-[800px] h-[600px]"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </nav>
    </>
  );
}
