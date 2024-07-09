import { Router } from 'express';
import { createJournal, getJournals, updateJournal, deleteJournal } from '../controllers/journalController';

const router = Router();

router.post('/', createJournal);
router.get('/', getJournals);
router.put('/:id', updateJournal);
router.delete('/:id', deleteJournal);

export default router;