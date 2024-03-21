class JSONStorage {
  set<T>(key: string, item: T): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  get<T>(key: string): T | null {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  update<T>(key: string, item: T): void {
    if (localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }
}

export const storage = new JSONStorage();
