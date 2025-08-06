import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { ADMIN_EMAIL } from "../../../constants";

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = params;
  const job = await prisma.job.delete({
    where: { id },
  });
  return NextResponse.json(job);
}
