class Student {
  private _enrollment: string;
  private _name: string;
  private _examGrades: number[] = Array();
  private _assignmentsGrades: number[] = Array();

  constructor(enrollment: string, name: string, examGrades: number[], assignmentsGrades: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examGrades = examGrades;
    this.assignmentsGrades = assignmentsGrades;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get examGrades(): number[] {
    return this._examGrades;
  }
  public set examGrades(value: number[]) {
    if(value.length !== 4) {
      throw new Error('Necessário quatro notas de prova')
    }
    this._examGrades = value;
  }

  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  public set assignmentsGrades(value: number[]) {
    if(value.length !== 2) {
      throw new Error('Necessário duas notas de trabalho')
    }
    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    return [...this.examGrades, ...this.assignmentsGrades]
    .reduce((prevGrade, actualGrade) => {
      actualGrade += prevGrade;
      return actualGrade;
    }, 0);
  }

  averageGrades(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examGrades.length + this.assignmentsGrades.length;
    return sumGrades / divider;
  } 
}


const studentOne = new Student('49', 'Giorno', [7, 9, 8, 7], [7, 9]);
console.log(studentOne);
console.log('Soma das notas: ', studentOne.sumGrades());
console.log('Média das notas: ', studentOne.averageGrades());

const studentTwo = new Student('7', 'Narancito', [5, 6, 8, 6], [4, 3]);
console.log(studentTwo);
console.log('Soma das notas: ', studentTwo.sumGrades());
console.log('Média das notas: ', studentTwo.averageGrades());
