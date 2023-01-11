//import {useState, useEffect,useRef} from 'react'
import Image from "next/image";
import Link from "next/link";
// Creating Tags with React.memo and to use SEO and schema.org tags meta tags to improve SEO and to improve the performance of the website

// Link is used to navigate between pages
// List of all the tags used in the website
// 1. <meta name="description" content="Pravassy is a blog website where you can find articles on various topics like technology, programming, web development, etc.">
// 2. <meta

const Ul = ({ children, itemprop, itemtype, itemID, itemscope }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "text";
  let itemType = itemtype ? itemtype : "https://schema.org/itemListElement";
  itemID = itemID ? itemID : "https://www.Pravassy.com";
  return (
    <ul
      className="list-disc list-inside"
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </ul>
  );
};

const Li = ({ children, itemprop, itemtype, itemID, className }) => {
  let itemProp = itemprop ? itemprop : "name";
  className = className ? className : "list-disc list-inside mb-4 text-lg ";
  return (
    <li
      itemProp={itemProp}
      itemType="https://schema.org/Thing"
      itemID={itemID}
      className={className}
    >
      {children}
    </li>
  );
};

const Section = ({
  children,
  className,
  title,
  itemprop,
  itemID,
  itemscope,
  itemtype,
}) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "articleBody";
  let itemType = itemtype ? itemtype : "https://schema.org/BlogPosting";
  itemID = itemID ? itemID : "https://www.Pravassy.com";
  title = title ? title : "Pravassy Blog";
  return (
    <section
      className={"article-body " + className}
      title={title}
      itemProp={itemProp}
      itemType={itemType}
      itemID={itemID}
      itemScope={itemScope}
    >
      {children}
    </section>
  );
};

const H1 = ({ children, className, itemprop, itemscope, itemtype, title }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "headline";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  className = className + "  text-3xl font-bold mb-4";
  return (
    <h1
      className={className}
      itemProp={itemProp}
      itemType={itemType}
      itemScope={itemScope}
      title={title || children}
    >
      {children}
    </h1>
  );
};

const H2 = ({ children, className, itemprop, itemscope, itemtype }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "headline";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  className = className + " text-3xl font-bold mb-4";
  return (
    <h2
      className={className}
      itemProp={itemProp}
      itemType={itemType}
      itemScope={itemScope}
      title={children}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children, className, itemprop, itemscope, itemtype }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "headline";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  className = className + " text-3xl font-bold mb-4";

  return (
    <h1
      className={className}
      itemProp={itemProp}
      itemType={itemType}
      itemScope={itemScope}
      title={children}
    >
      {children}
    </h1>
  );
};

const H4 = ({ children, className, itemprop, itemscope, itemtype }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "headline";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  className = className + " text-3xl font-bold mb-4";

  return (
    <h1
      className={className}
      itemProp={itemProp}
      itemType={itemType}
      itemScope={itemScope}
      title={children}
    >
      {children}
    </h1>
  );
};

const H5 = ({ children, className, itemprop, itemscope, itemtype }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "headline";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  className = className + " text-3xl font-bold mb-4";

  return (
    <h1
      className={className}
      itemProp={itemProp}
      itemType={itemType}
      itemScope={itemScope}
      title={children}
    >
      {children}
    </h1>
  );
};

const H6 = ({ children, className, itemprop, itemscope, itemtype }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "headline";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  className = className + "text-md mb-2";
  return (
    <h1
      className={className}
      itemProp={itemProp}
      itemType={itemType}
      itemScope={itemScope}
      title={children}
    >
      {children}
    </h1>
  );
};

const P = ({ children, className, itemprop, itemtype }) => {
  let itemProp = itemprop ? itemprop : "text";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  className = className + " text-lg mb-2";
  return (
    <p className={className} itemProp={itemProp} itemType={itemType}>
      {children}
    </p>
  );
};

const Img = ({
  src,
  alt,
  width,
  height,
  loader,
  loading,
  itemprop,
  itemscope,
  itemtype,
}) => {
  loading = loading ? loading : "lazy";
  let itemProp = itemprop ? itemprop : "image";
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemType = itemtype ? itemtype : "https://schema.org/ImageObject";
  width = width ? width : "100";
  height = height ? height : "100";
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      itemProp={itemProp}
      itemType={itemType}
      loading={loading}
      loader={loader}
    />
  );
};

const Div = ({ children, className, itemprop, itemscope, itemtype }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemprop ? itemprop : "text";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";

  return (
    <div
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </div>
  );
};

const Span = ({ children, className, itemprop, itemscope, itemtype }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "text";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <span
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </span>
  );
};

const A = ({ children, className, href, itemprop, itemscope, itemtype }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "url";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  href = href ? href : "#";
  return (
    <Link
      className={className}
      href={href}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </Link>
  );
};

const Input = ({
  children,
  className,
  type,
  name,
  id,
  value,
  placeholder,
  itemID,
  itemprop,
  itemtype,
  itemscope,
  onChange,
}) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemprop ? itemprop : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  itemID = itemID ? itemID : "input";
  return (
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      itemID={itemID}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
      onChange={onChange}
    />
  );
};

const Button = ({
  children,
  className,
  type,
  name,
  id,
  itemID,
  itemprop,
  itemtype,
  itemscope,
  onClick,
}) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemprop ? itemprop : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  itemID = itemID ? itemID : "button";
  return (
    <button
      className={className}
      type={type}
      name={name}
      id={id}
      itemID={itemID}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const SeachForm = ({
  children,
  inputClassName,
  itemProp,
  itemtype,
  itemscope,
  onSubmit,
  onChange,
  submitValue,
}) => {
  return (
    <div itemscope itemType="http://schema.org/WebSite">
      <meta itemProp="url" content="https://www.example.com/" />
      <form
        itemProp="potentialAction"
        itemScope
        itemType="http://schema.org/SearchAction"
        onSubmit={onSubmit}
      >
        <meta
          itemProp="target"
          content="https://query.example.com/search?q={search_term_string}"
        />
        <input
          itemProp="query-input"
          type="text"
          name="search_term_string"
          required
          onChange={onChange}
          className={inputClassName}
        />
        <input
          className="bg-blog text-white font-bold py-2 px-4 rounded m-1 "
          type="submit"
          value={submitValue}
        />
      </form>
    </div>
  );
};

const Form = ({
  children,
  className,
  itemprop,
  itemtype,
  itemscope,
  onSubmit,
}) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "url";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <form
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

const Code = ({ children, className, itemprop, itemtype, itemscope }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "url";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <code
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </code>
  );
};

const Article = ({ children, className, itemprop, itemtype, itemscope }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "url";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  className = className
    ? className
    : " relative container mx-auto w-[65ch] max-w-[63ch] space-y-12 ";
  return (
    <article
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </article>
  );
};

const Header = ({ children, className, itemprop, itemtype, itemscope }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "header";
  let itemType = itemtype
    ? itemtype
    : "http://schema.org/SiteNavigationElement";
  return (
    <header
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </header>
  );
};

const Footer = ({ children, className, itemprop, itemtype, itemscope }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "url";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <footer
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </footer>
  );
};

const Nav = ({ children, className, itemProp, itemtype, itemscope }) => {
  let itemScope = itemscope ? itemscope : "itemscope";

  let itemType = itemtype
    ? itemtype
    : "http://schema.org/SiteNavigationElement";
  return (
    <nav className={className} itemScope={itemScope} itemType={itemType}>
      {children}
    </nav>
  );
};

const Aside = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <aside
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </aside>
  );
};

const Main = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <main
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </main>
  );
};

const Figure = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <figure
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </figure>
  );
};

const Figcaption = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <figcaption
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </figcaption>
  );
};

const Blockquote = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";

  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <blockquote
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </blockquote>
  );
};

const Pre = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <pre
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </pre>
  );
};

const Address = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <address
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </address>
  );
};

const Details = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <details
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </details>
  );
};

const Summary = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <summary
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </summary>
  );
};

const Dl = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <dl
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </dl>
  );
};

const Dt = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";

  return (
    <dt
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </dt>
  );
};

const Dd = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <dd
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </dd>
  );
};

const Ol = ({ children, className, itemprop, itemtype, itemscope }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "url";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";

  return (
    <ol
      className={className+" list-decimal"}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </ol>
  );
};

const Table = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <table
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </table>
  );
};

const Caption = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <caption
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </caption>
  );
};

const Tbody = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <tbody
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </tbody>
  );
};

const Td = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <td
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </td>
  );
};

const Tfoot = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <tfoot
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </tfoot>
  );
};

const Th = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <th
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </th>
  );
};

const Thead = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <thead
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </thead>
  );
};

const Tr = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <tr
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </tr>
  );
};

const Hr = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <hr
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </hr>
  );
};

const Em = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemType = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <em
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </em>
  );
};

const Strong = ({ children, className, itemprop, itemtype, itemscope }) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "url";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <strong
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </strong>
  );
};

const Small = ({ children, className, itemProp, itemtype, itemscope }) => {
  itemScope = itemscope ? itemscope : "itemscope";
  itemProp = itemProp ? itemProp : "url";
  itemtype = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <small
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
    >
      {children}
    </small>
  );
};

const SummaryFAQ = ({
  children,
  className,
  itemprop,
  itemtype,
  itemscope,
  question,
  answer,
  title,
}) => {
  let itemScope = itemscope ? itemscope : "itemscope";
  let itemProp = itemprop ? itemprop : "url";
  let itemType = itemtype ? itemtype : "https://schema.org/Thing";
  return (
    <details
      className={className}
      itemScope={itemScope}
      itemProp={itemProp}
      itemType={itemType}
      title={answer}
    >
      <summary className="prose text-3xl font-bold text-gray-900 mx-auto">
        {question}
      </summary>
      <P>{answer}</P>
    </details>
  );
};

export {
  SummaryFAQ,
  Div,
  Span,
  A,
  Input,
  Button,
  SeachForm,
  Form,
  Code,
  Img,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Ul,
  Li,
  Section,
  Article,
  Header,
  Footer,
  Nav,
  Aside,
  Main,
  Figure,
  Figcaption,
  Blockquote,
  Pre,
  Address,
  Details,
  Summary,
  Dl,
  Dt,
  Dd,
  Ol,
  Table,
  Caption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Hr,
  Em,
  Strong,
  Small,
  // S,
  // Cite,
  // Q,
  // Dfn,
  // Abbr,
  // Data,
  // Time,
  // Var,
  // Samp,
  // Kbd,
  // Sub,
  // Sup,
  // I,
  // B,
  // U,
  // Mark,
  // Ruby,
  // Rt,
  // Rp,
  // Bdi,
  // Bdo,
  // Br,
  // Wbr,
  // Ins,
  // Del,
  // Iframe,
  // Embed,
};
