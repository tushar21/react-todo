export enum NotificationStatus {
    Info = 'info',
    Success = 'success',
    Error = 'error',
    Default = 'info'
}

export interface Notification{
    status?: boolean
    message: string
    type: NotificationStatus
}