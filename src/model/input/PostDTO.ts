import moment from 'moment';

export interface PostDTO {
    id: string,
    text: string,
    create_at: moment.Moment
    id_user: string,
    type: string,
    photo: string
}