import { Request, Response } from 'express';
import Journal from '../models/Journal';

export const createJournal = async (req: Request, res: Response) => {
  const { title, content, category } = req.body;
  try {
    const newJournal = new Journal({ title, content, category });
    await newJournal.save();
    res.status(201).json({ message: 'Journal entry created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating journal entry' });
  }
};

export const getJournals = async (req: Request, res: Response) => {
  try {
    const journals = await Journal.find();
    res.status(200).json(journals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching journal entries' });
  }
};

export const updateJournal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, category } = req.body;
  try {
    await Journal.findByIdAndUpdate(id, { title, content, category });
    res.status(200).json({ message: 'Journal entry updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating journal entry' });
  }
};

export const deleteJournal = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Journal.findByIdAndDelete(id);
    res.status(200).json({ message: 'Journal entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting journal entry' });
  }
};