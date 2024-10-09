import { getDocBySlug } from '../../../lib/docs'; // Adjust path if necessary

export default function BankingListHelp() {
  const doc = getDocBySlug('banking-list'); // Markdown file for contacts add help

  return (
    <div style={{ padding: '20px' }}>
      {/* <h1>{doc.title}</h1> */}
      <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
    </div>
  );
}

