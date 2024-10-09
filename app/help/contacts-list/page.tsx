import { getDocBySlug } from '../../../lib/docs'; // Adjust path if necessary

export default function ContactsListHelp() {
  const doc = getDocBySlug('contacts-list'); // Slug should match the markdown filename

  return (
    <div style={{ padding: '20px' }}>
      {/* <h1>{doc.title}</h1> */}
      <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
    </div>
  );
}
