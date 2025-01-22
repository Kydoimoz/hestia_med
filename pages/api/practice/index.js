<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const practiceData = req.body;

      res.status(201).json({ message: 'Praxis erfolgreich registriert!' });
    } catch (error) {
      res.status(500).json({ message: 'Fehler beim Speichern der Praxisdaten' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:91d98e28664185eec92359240237748b940bcb9536298a893b0a454e9da7fec8
size 465
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
