import { SubjectManager } from './subjectManager';

describe('SubjectManager', () => {
  it('should create a SubjectManager instance', () => {
    const manager = new SubjectManager<number>();
    expect(manager).toBeInstanceOf(SubjectManager);
  });

  it('should get the subject as an observable', (done) => {
    const manager = new SubjectManager<number>();
    manager.getSubject().subscribe((value) => {
      expect(value).toBe(42);
      done();
    });
    manager.setSubject(42);
  });

  it('should set the subject value', (done) => {
    const manager = new SubjectManager<number>();
    manager.getSubject().subscribe((value) => {
      expect(value).toBe(42);
      done();
    });
    manager.setSubject(42);
  });
});
