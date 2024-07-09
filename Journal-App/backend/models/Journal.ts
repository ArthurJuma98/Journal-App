import { Schema, model } from 'mongoose';

interface IJournal {
  title: string;
  content: string;
  category: string;
  date: Date;
}

const journalSchema = new Schema<IJournal>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Journal = model<IJournal>('Journal', journalSchema);

export default Journal;
