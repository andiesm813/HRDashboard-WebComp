export default class DashboardDataService {
  public async getNewTeamMembersList(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/6371c465-f63a-4dd9-436e-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getTeamMembersGrid(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/d2d94130-e6aa-4387-437e-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getTeamGrowth(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/9d362c81-e18a-4fff-4355-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getAllTeamMembers(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/d2d94130-e6aa-4387-437e-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }
}
