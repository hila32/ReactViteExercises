import apiClient from "./api-client";

interface Entity{
    id: number;
}

class httpService {
    endPoint: string;
    constructor(endPoint:string){
        this.endPoint = endPoint
    }

    getAll<T>() {
        const controller = new AbortController()
        const request = apiClient.get<T[]>(this.endPoint, {signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }
    update<T extends Entity>(entity: T){
        return apiClient.patch(this.endPoint +'/'+ entity.id, entity)  
    }
    add<T>(entity: T){
        return apiClient.post(this.endPoint, entity)
    }
    delete(id: number){
        return apiClient.delete(this.endPoint + '/' + id)
    }
}

const create = (endPoint: string) => new httpService(endPoint);
export default create;