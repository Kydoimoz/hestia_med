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
