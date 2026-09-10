---
title: "The Red Baron flies, and here's what holds it up"
date: 2026-09-10
description: "A Create: Aeronautics build that actually stays in the air — what makes it fly, why the drivable version is a different machine, and how to not lose it over the ocean."
draft: true   # ⚠️ EJEMPLO. El texto lo escribió Claude como prueba: los datos
              # sobre esta build concreta NO están verificados. Revísalo o
              # reescríbelo antes de poner draft: false.
schematic: https://3zkmcuser.gumroad.com/l/zqqyth
---

Most planes people build in Create end up doing one of two things: sitting on
the runway looking great, or taking off once and never coming back. This one
does neither, and the reason comes down to where the mass sits.

## What actually makes it fly

**Create: Aeronautics** doesn't hand you flight for free. It simulates lift,
drag and weight, which means a plane that looks right can still be a brick.
Three things matter, in this order:

1. **Propeller thrust has to beat total mass.** Every decorative block you bolt
   on is mass. The cosmetic passes come last, once it flies.
2. **Centre of mass sits ahead of centre of lift.** Get this backwards and the
   nose pitches up until it stalls. This is the one that kills most builds.
3. **Control surfaces need clean air.** Tucked behind a wing, they do nothing.

The build keeps the heavy bearing assembly forward of the wing root, which is
what buys the stability.

## The drivable one is not the same plane

Worth being clear, because the names are confusing. There are two versions:

| | Flies | Steers |
|---|---|---|
| Red Baron Plane | Yes, straight and level | No |
| Drivable Red Baron Plane | Yes | Yes — pitch and yaw |

The drivable one isn't the first with a seat added. It was retuned from the
ground up: control surfaces are bigger, the tail is longer, and the mass moved
back slightly so it responds instead of fighting you.

## Before you import

⚠️ This one needs **Create: Aeronautics** on top of Create. Without it the
schematic places blocks that do nothing and you get a very handsome statue.

Drop the `.nbt` into `.minecraft/schematics/`, craft an Empty Schematic, and
pick the file from your inventory. Then load it into a Schematicannon with
materials and gunpowder.

> Give yourself room. It builds larger than it looks on the preview, and a
> Schematicannon that runs into terrain will happily embed your wing in a hill.

Take off into the wind, keep the nose level, and don't chase altitude on the
first pass.
