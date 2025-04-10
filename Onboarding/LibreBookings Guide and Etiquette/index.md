---
title: "LibreBooking - Overview"
date: 2024-11-22
categories: 
  - "staff"
---

## Accessing LibreBooking

At the current moment, all instances of LibreBooking are self-hosted on the UoS internal network by Dave Johnston (d.a.johnston@soton.ac.uk)

**"WSA Comp" (Capital House) instance can be accessed here:** http://152.78.4.60:8080/wsacompbooked/

#### VPN Required

In order to access internally-hosted domains, you must either be connected by Ethernet on one of our campuses, or have activated GlobalProtect VPN

## LibreBooking Structure

```
---
title: LibreBooking Entity Relationships
---
erDiagram
    SCHEDULES ||--o{ RESOURCES: "A schedule holds any number of resources.<br>A resource can only be allocated to one schedule. <br> Schedule defines available timeslots for its resources." 
    RESOURCES }o--o{ USER_GROUPS: "A resource can be visible to a group of users"
    RESOURCES }o--o{ USERS: "A resource can also be visible <br> to individual users"
    USER_GROUPS }o--o{ USERS: "Users can be placed in multiple groups"

    RESOURCES ||--o{ RESERVATIONS : "Depending on resource capacity,<br> one or many reservations can be made"
    RESERVATIONS ||--|{ USERS : "<br>A reservation can involve multiple users"
    RESERVATIONS ||-- o{ ACCESSORIES : "A reservation can include<br> a number of optional accessories"

 
```

![[images/image-70.png]]

## Known Issues/Concerns

- When importing users, you can only define the user as being part of one group. (Software limitation)

- It is unclear which features will be available once iSolutions takes over the hosting of the service.

- The system will not send out email notifications to users at this time. This will hopefully be fixed when iSolutions takes over.

- It is not possible to generate QR Codes for resources at this time. This will hopefully be fixed when iSolutions takes over.
    - The QR codes are not asset tags, but a simply a link to book the resource

- Librebooking has a check in/check out system but I am currently unsure of how to best utilize it
