<<<<<<< HEAD
// pages/privacy.js

import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung - Hestia Med GmbH</title>
        <meta name="description" content="Datenschutzerklärung von Hestia Med GmbH" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Datenschutzerklärung</h1>
        <p className="text-lg text-gray-700 mb-4">
          Die Hestia - Med GmbH (im Folgenden „wir“ oder „uns“) verpflichtet sich, die Privatsphäre der Nutzer zu schützen
          und die Verarbeitung personenbezogener Daten in Übereinstimmung mit der geltenden Datenschutzgesetzgebung,
          insbesondere der Datenschutz-Grundverordnung (DSGVO), durchzuführen.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">1. Verantwortlicher</h2>
        <p className="text-lg text-gray-700 mb-4">
          Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist:
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Hestia - Med GmbH<br />
          Musterstraße 123, 1010 Wien, Österreich<br />
          E-Mail: info@hestia-med.com
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir erheben und verarbeiten Ihre personenbezogenen Daten nur, wenn dies gesetzlich erlaubt ist oder wenn Sie
          uns Ihre ausdrückliche Zustimmung erteilt haben. Zu den personenbezogenen Daten, die wir erheben können, gehören
          unter anderem Name, E-Mail-Adresse, Telefonnummer und Zahlungsdaten.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">3. Zweck der Verarbeitung</h2>
        <p className="text-lg text-gray-700 mb-4">
          Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zu folgenden Zwecken:
        </p>
        <ul className="list-disc pl-6">
          <li>Erfüllung vertraglicher Pflichten</li>
          <li>Kommunikation mit Ihnen</li>
          <li>Marketing und Werbung (sofern Sie eingewilligt haben)</li>
          <li>Einhalten gesetzlicher Verpflichtungen</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">4. Rechtsgrundlage der Verarbeitung</h2>
        <p className="text-lg text-gray-700 mb-4">
          Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage der folgenden Rechtsgrundlagen der DSGVO.:
        </p>
        <ul className="list-disc pl-6">
          <li>Erfüllung eines Vertrages</li>
          <li>Einwilligung</li>
          <li>Erfüllung einer rechtlichen Verpflichtung</li>
          <li>Wahrung berechtigter Interessen</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">5. Weitergabe von Daten</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ihre personenbezogenen Daten werden nur dann an Dritte weitergegeben, wenn dies zur Erfüllung des Vertrags,
          aufgrund gesetzlicher Verpflichtungen oder auf Grundlage Ihrer Einwilligung erforderlich ist.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">6. Datenübertragung in Drittstaaten</h2>
        <p className="text-lg text-gray-700 mb-4">
          Eine Übertragung Ihrer personenbezogenen Daten an Drittländer außerhalb der Europäischen Union erfolgt nur, wenn
          dies zur Vertragserfüllung notwendig ist oder Sie der Übermittlung zugestimmt haben.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">7. Ihre Rechte</h2>
        <p className="text-lg text-gray-700 mb-4">
          Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu verlangen,
          diese zu berichtigen, zu löschen oder deren Verarbeitung einzuschränken. Sie haben zudem das Recht, der
          Verarbeitung Ihrer personenbezogenen Daten zu widersprechen und Ihre Einwilligung zur Verarbeitung jederzeit
          zu widerrufen.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">8. Cookies</h2>
        <p className="text-lg text-gray-700 mb-4">
          Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Cookies sind kleine Textdateien, die
          auf Ihrem Gerät gespeichert werden. Sie können die Verwendung von Cookies in den Einstellungen Ihres Browsers
          deaktivieren, jedoch kann dies die Funktionalität der Website beeinträchtigen.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">9. Sicherheit</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor
          unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">10. Aufbewahrung der Daten</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der oben genannten Zwecke
          erforderlich ist oder wie es gesetzlich vorgeschrieben ist.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">11. Änderungen der Datenschutzerklärung</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern. Die Änderungen werden auf dieser Seite
          veröffentlicht und treten mit ihrer Veröffentlichung in Kraft.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">12. Schlussbestimmungen</h2>
        <p className="text-lg text-gray-700 mb-4">
          Diese Datenschutzerklärung stellt die vollständige Vereinbarung zwischen Ihnen und uns in Bezug auf die
          Verarbeitung Ihrer personenbezogenen Daten dar. Sie ersetzt alle früheren Vereinbarungen oder Mitteilungen zu
          diesem Thema.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6">Kontakt</h2>
        <p className="text-lg text-gray-700 mb-4">
          Bei Fragen zur Datenschutzerklärung oder zum Thema Datenschutz können Sie uns unter den folgenden Kontaktdaten
          erreichen:
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Hestia - Med GmbH<br />
          Musterstraße 123, 1010 Wien, Österreich<br />
          E-Mail: info@hestia-med.com
        </p>
      </div>
    </>
  );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:eafb4b599f0ec70268547f6fe9e17b88b9576ee75522fbac63e4cf7af8a3a1dc
size 6836
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
