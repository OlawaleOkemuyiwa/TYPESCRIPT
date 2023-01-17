export enum ProjectStatus {
  ACTIVE,
  FINISHED,
}

//PROJECT TYPE (we're using a custom Class type for a project type and not an interface or type alias with the "type" keyword cause we just want to define a type of a project, we also want to to instatiate it many times to make up projects
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus //we could have used union literal type "active" | "finished"
  ) {}
}
