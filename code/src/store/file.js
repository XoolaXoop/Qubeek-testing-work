import { defineStore } from 'pinia';

export const useFileStore = defineStore('file', {
  state: () => ({
    /** @type {{ fileName: string, extention: string, size: number }[]} */
    files: [],
  }),
  getters: {
    getAllFiles: (state) => {
      return () => state.files;
    },
  },
  actions: {
    addFile(payload) {
      console.log('ADD', payload, this.files);
      this.files.push(payload);
    },
    removeFile(payload) {
      console.log('REMOVE', payload, this);
      const index = this.files.findIndex((file) => file.fileName === payload.fileName);
      if (index !== -1) {
        this.files.splice(index, 1);
      }
    },
  },
});