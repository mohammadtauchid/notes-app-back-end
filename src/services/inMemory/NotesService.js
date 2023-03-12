/* eslint-disable no-underscore-dangle */
const { nanoid } = require('nanoid');

class NotesService {
  constructor() {
    this._notes = [];
  }

  addNote({ title, body, tags }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const newNote = {
      title, body, tags, id, createdAt, updatedAt,
    };

    this._notes.push(newNote);

    const isSuccess = this._notes.filter((note) => note.id === id).length > 0;

    if (!isSuccess) {
      throw new Error('Catatan gagal ditambahkan');
    }

    return id;
  }

  getNotes() {
    return this._notes;
  }

  getNoteById(id) {
    const note = this._notes.filter((n) => n.id === id)[0];

    if (!note) {
      throw new Error('Catatan tidak ditemukan');
    }

    return note;
  }

  editNoteById(id, { title, body, tags }) {
    const idx = this._notes.findIndex((n) => n.id === id);

    if (idx === -1) {
      throw new Error('Gagal memperbarui catatan. Id tidak ditemukan');
    }

    const updatedAt = new Date().toISOString();

    this._notes[idx] = {
      ...this._notes[idx],
      title,
      body,
      tags,
      updatedAt,
    };
  }

  deleteNoteById(id) {
    const idx = this._notes.findIndex((n) => n.id === id);

    if (idx === -1) {
      throw new Error('Gagal memperbarui catatan. Id tidak ditemukan');
    }

    this._notes.splice(idx, 1);
  }
}

module.exports = NotesService;
