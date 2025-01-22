<<<<<<< HEAD
import React, { useState } from "react";
import classes from "./UntersuchungsprotokollForm.module.css";

export default function UntersuchungsprotokollForm({ sampleDocuments, setSampleDocuments, mode }) {
  const [formularDaten, setFormularDaten] = useState({
    type: "unt",
    Titel: "",
    UntersuchungsDatum: "",
    Untersucher: "",
    Befunde: "",
    Diagnose: "",
    Empfehlungen: "",
    NachkontrollDatum: "",
    Bildgebung: "",
    LaborErgebnisse: "",
    Vitalzeichen: {
      Herzfrequenz: "",
      Blutdruck: "",
      Atemfrequenz: "",
      Temperatur: "",
      Sauerstoffsättigung: "",
    },
    KörperlicheUntersuchung: {
      Allgemeinzustand: "",
      KopfUndHals: "",
      Brustkorb: "",
      Bauch: "",
      Extremitäten: "",
      Neurologisch: "",
    },
    ZusätzlicheNotizen: "",
  });

  const [suchBegriff, setSuchBegriff] = useState("");

  const handleAenderung = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [abschnitt, feld] = name.split(".");
      setFormularDaten((vorher) => ({
        ...vorher,
        [abschnitt]: {
          ...vorher[abschnitt],
          [feld]: value,
        },
      }));
    } else {
      setFormularDaten((vorher) => ({
        ...vorher,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSpeichern = (e) => {
    e.preventDefault();

    setSampleDocuments((vorher) => [...(vorher || []), formularDaten]);

    setFormularDaten({
      Titel: "",
      UntersuchungsDatum: "",
      Untersucher: "",
      Befunde: "",
      Diagnose: "",
      Empfehlungen: "",
      NachkontrollDatum: "",
      Bildgebung: "",
      LaborErgebnisse: "",
      Vitalzeichen: {
        Herzfrequenz: "",
        Blutdruck: "",
        Atemfrequenz: "",
        Temperatur: "",
        Sauerstoffsättigung: "",
      },
      KörperlicheUntersuchung: {
        Allgemeinzustand: "",
        KopfUndHals: "",
        Brustkorb: "",
        Bauch: "",
        Extremitäten: "",
        Neurologisch: "",
      },
      ZusätzlicheNotizen: "",
    });
  };

  const gefilterteFelder = Object.entries(formularDaten)
    .filter(([schluessel, wert]) => schluessel.includes(suchBegriff) || JSON.stringify(wert).includes(suchBegriff))
    .map(([schluessel, wert]) => (
      <div key={schluessel} className={classes.formGroup}>
        <label>{schluessel.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label> 
        {typeof wert === "object" ? (
          Object.entries(wert).map(([unterSchluessel, unterWert]) => (
            <input
              key={unterSchluessel}
              name={`${schluessel}.${unterSchluessel}`}
              value={unterWert}
              onChange={handleAenderung}
              placeholder={unterSchluessel.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              className={classes.inputFeld}
            />
          ))
        ) : schluessel === "UntersuchungsDatum" || schluessel === "NachkontrollDatum" ? (
          <input
            type="date"
            name={schluessel}
            value={wert}
            onChange={handleAenderung}
            className={classes.inputFeld}
          />
        ) : (
          <input
            name={schluessel}
            value={wert}
            onChange={handleAenderung}
            placeholder={schluessel.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            className={classes.inputFeld}
          />
        )}
      </div>
    ));

  return (
    <div className={classes.formularContainer}>
      <h2 className={classes.titelUeberschrift}>Untersuchungsprotokoll erstellen</h2>
      <input
        type="text"
        placeholder="Feldsuche"
        value={suchBegriff}
        onChange={(e) => setSuchBegriff(e.target.value)}
        className={classes.inputFeld}
      />
      <form onSubmit={handleSpeichern}>
        {gefilterteFelder.length > 0 ? (
          gefilterteFelder
        ) : (
          <p className={classes.keineFelderNachricht}>Keine passenden Felder gefunden.</p>
        )}

{mode !== "view" && (
        <button type="submit" className={classes.submitButton}>
          Speichern
        </button>)}
      </form>
    </div>
  );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:33a64aef6073cdb111921f48888fa97c1710552f03c7e30f2b8871229c2440b5
size 4457
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
