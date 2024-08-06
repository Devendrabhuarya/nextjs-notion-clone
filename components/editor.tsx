'use client'

import { BlockNoteEditor, PartialBlock } from '@blocknote/core'
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from "@blocknote/mantine";

import '@blocknote/core/style.css'
import { useTheme } from "next-themes";

import { useEdgeStore } from "@/lib/edgestore"
import { useCallback } from 'react';

interface EditorProps {
  onChange: (value: string) => void
  initialContent?: string
  editable?: boolean
}

function Editor({ onChange, initialContent, editable }: EditorProps) {

  const { resolvedTheme } = useTheme()
  const { edgestore } = useEdgeStore()

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file })

    return response.url
  }

  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
    uploadFile: handleUpload,
  });

  const uploadToDatabase = useCallback(() => {
    if (onChange) {
      setTimeout(() => {
        onChange(JSON.stringify(editor.document));
      }, 1000);
    }
  }, [editor, onChange]);

  return (
    <div>
      <BlockNoteView editor={editor} theme={resolvedTheme === 'dark' ? 'dark' : 'light'} onChange={uploadToDatabase} editable={editable} />
    </div>
  )
}

export default Editor;