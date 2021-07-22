import { ClientsInfo } from '@/store/modules/clients/clients-types';
import Api from './api';
export default class ClientsService {

    static async fetchClients(): Promise<Array<ClientsInfo>> {
        const response = await Api.get("/clients");
        const data = response.data;
        return data;
    }

    static async removeClient(clientId: number): Promise<void> {
        const response = await Api.post("/clients", {id: clientId});
    }
}