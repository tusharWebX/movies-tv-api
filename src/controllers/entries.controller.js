import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createEntry(req, res) {
  try {
    const entry = await prisma.entry.create({ data: req.body });
    return res.status(201).json(entry);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create entry" });
  }
}

export async function listEntries(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // ✅ SEARCH LOGIC MUST BE HERE
    const search = req.query.search || "";

    const where = search
      ? { title: { contains: search, mode: "insensitive" } }
      : {};

    const [total, data] = await Promise.all([
      prisma.entry.count({ where }),
      prisma.entry.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return res.json({ total, page, pageSize: limit, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch entries" });
  }
}

export async function updateEntry(req, res) {
  const id = parseInt(req.params.id);

  try {
    const updated = await prisma.entry.update({
      where: { id },
      data: req.body,
    });

    return res.json(updated);
  } catch (error) {
    return res.status(404).json({ message: "Entry not found" });
  }
}

export async function deleteEntry(req, res) {
  const id = parseInt(req.params.id);

  try {
    await prisma.entry.delete({
      where: { id },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(404).json({ message: "Entry not found" });
  }
}
