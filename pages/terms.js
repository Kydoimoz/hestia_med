import React from 'react';

const AGB = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Allgemeine Geschäftsbedingungen der Firma Hestia Med</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§1 Geltung gegenüber Unternehmern und Begriffsdefinitionen</h2>
        <p>
          (1) Die nachfolgenden Allgemeinen Geschäftbedingungen gelten für alle Lieferungen zwischen uns und einem Verbraucher in ihrer zum
          Zeitpunkt der Bestellung gültigen Fassung.
        </p>
        <p>
          Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen
          noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§2 Zustandekommen eines Vertrages, Speicherung des Vertragstextes</h2>
        <p>
          (1) Die folgenden Regelungen über den Vertragsabschluss gelten für Bestellungen über unseren Internetshop{' '}
          <a href="http://www.beispielshop-online.de" className="text-blue-600">http://www.beispielshop-online.de</a>.
        </p>
        <p>
          (2) Im Falle des Vertragsschlusses kommt der Vertrag mit
        </p>
        <address>
          Hestia Med<br />
          Hestia<br />
          Wiener Neudorf<br />
          D-1111 Musterstadt<br />
          Registernummer 12131415<br />
          Registergericht Amtsgericht Musterstadt
        </address>
        <p>
          (3) Die Präsentation der Waren in unserem Internetshop stellen kein rechtlich bindendes Vertragsangebot unsererseits dar, sondern
          sind nur eine unverbindliche Aufforderungen an den Verbraucher, Waren zu bestellen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§3 Preise, Versandkosten, Zahlung, Fälligkeit</h2>
        <p>
          (1) Die angegebenen Preise enthalten die gesetzliche Umsatzsteuer und sonstige Preisbestandteile. Hinzu kommen etwaige
          Versandkosten.
        </p>
        <p>
          (2) Der Verbraucher hat die Möglichkeit der Zahlung per Vorkasse.
        </p>
        <p>
          (3) Hat der Verbraucher die Zahlung per Vorkasse gewählt, so verpflichtet er sich, den Kaufpreis unverzüglich nach
          Vertragsschluss zu zahlen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§4 Lieferung</h2>
        <p>
          (1) Sofern wir dies in der Produktbeschreibung nicht deutlich anders angegeben haben, sind alle von uns angebotenen Artikel
          sofort versandfertig. Die Lieferung erfolgt hier spätesten innerhalb von 5 Werktagen.
        </p>
        <p>
          (2) Die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der verkauften Sache geht auch beim
          Versendungskauf erst mit der Übergabe der Sache an den Käufer auf diesen über.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§5 Eigentumsvorbehalt</h2>
        <p>
          Wir behalten uns das Eigentum an der Ware bis zur vollständigen Bezahlung des Kaufpreises vor.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">§6 Widerrufsrecht des Kunden als Verbraucher</h2>
        <p>
          Widerrufsrecht für Verbraucher
        </p>
        <p>
          Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei Verbraucher jede natürliche Person ist, die ein
          Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
          zugerechnet werden können:
        </p>
        <h3 className="text-xl font-semibold mt-4">Widerrufsbelehrung</h3>
        <p>
          Widerrufsrecht
        </p>
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
        </p>
        <p>
          Die Widerrufsfrist beträgt vierzehn Tage, ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der
          Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
        </p>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
        </p>
        <address>
          Hestia Med<br />
          Hestia<br />
          Wiener Neudorf<br />
          D-1111 Musterstadt<br />
          E-Mail: <a href="mailto:shop@beispielshop.com" className="text-blue-600">shop@beispielshop.com</a><br />
          Telefax: 05123 45678910
        </address>
        <p>
          mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen
          Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht
          vorgeschrieben ist.
        </p>
      </section>
    </div>
  );
};

export default AGB;
